import type {Metadata} from "next";
import React from "react";
import TodoWithReducer from "@/app/components/todos/TodoWithReducer";

export default function IndexPage() {
    const profile = {
        name: "John Doe",
        image: "https://www.eltbuzz.com/randomimages/main2.png"
    };

    return (
        <>
            {/*<Counter/>;*/}
            {/*<Profile profile={profile}/>*/}
            {/*<CallbackDemo/>*/}
            {/*<ThemeContextMode/>*/}
            {/*<CounterWithReducer/>*/}
            <TodoWithReducer/>
        </>
    )
}

export const metadata: Metadata = {
    title: "Redux Toolkit",
};
