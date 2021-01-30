import React, { useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Layout from "../components/Layout";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      accessCode: event.currentTarget.accessCode.value,
    };

    return await fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <main className={"cover"}>
      <div className={"login-container"}>
        <form
          onSubmit={(event) => {
            handleSubmit(event)
              .then(
                (res) =>
                  // User was most likely redirected to login, so redirect the user back to wherever they used to be
                  res.ok &&
                  Router.push(
                    router.query.redirect === undefined
                      ? "/"
                      : "/" + router.query.redirect
                  )
              )
              .catch((error) => setErrorMsg(error));
          }}
        >
          <label>
            <h2>Papers, please</h2>
            <input
              className={"text-input"}
              type={"text"}
              name={"accessCode"}
              required
            />
          </label>
          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
      </div>
    </main>
  );
};

export default Login;
