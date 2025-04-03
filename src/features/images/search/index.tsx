import { useCallback, useRef, useState } from 'react'
import { Form, useSearchParams, useSubmit } from 'react-router'
import Input from '../../../components/input'
import { FormStyles } from './index.css'

const Search = () => {
  const submit = useSubmit()
  const formRef = useRef<HTMLFormElement | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  const handleChange = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      if (formRef.current) {
        submit(formRef.current, { replace: true })
      }
    }, 700)
  }, [submit])

  const handleClear = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.delete('q')
    setSearchParams(params, { replace: true })

    formRef.current?.reset()
    setQuery('')
  }, [setSearchParams, searchParams])

  return (
    <Form method="get" role="search" className={FormStyles} ref={formRef} onChange={handleChange}>
      <Input
        name="q"
        placeholder="Search"
        value={query}
        size="medium"
        onClear={handleClear}
        onChange={setQuery}
      />
    </Form>
  )
}

export default Search
