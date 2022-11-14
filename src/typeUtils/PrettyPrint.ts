type Has<U, U1> = [U1] extends [U] ? 1 : 0

type If<B extends 0 | 1, Then, Else = never> = B extends 1 ? Then : Else

export type PrettyPrint<A, Seen = never> = If<
  Has<Seen, A>,
  A,
  A extends Record<string | number | symbol, unknown>
    ? { [K in keyof A]: PrettyPrint<A[K], A | Seen> } & unknown
    : A
>

// import { Timestamp } from 'firebase/firestore'
// type T1 = { b: string } & { nested: { props: number[] } } & { date: Timestamp[]; d: any[] }
// type Test1 = PrettyPrint<T1>
