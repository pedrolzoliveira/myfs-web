import Router from "next/router";
import { useEffect } from "react";

/**
 * Calls this function in the start of your page for use the Protected mode a.k.a. loggedInUser
 */
export function Protected() {
    useEffect(() => {
        if (!localStorage.getItem("IS_LOGGED_IN")) {
            Router.push('/signin')
        }

    }, [])
}
