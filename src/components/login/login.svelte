<script>
    import { user } from "../../stores";
    let username = "ashwani";
    let password = "password";

    function login() {
        if (!username || !password) {
            alert("please enter any dummy username and password.");
            return;
        }

        user.update(
            (user) =>
                (user = { username: username, password: password, login: true })
        );
    }
</script>

<div class="form-signin w-50 m-auto text-center p-5">
    <form on:submit|preventDefault={login}>
        <h1 class="h1 mb-3 fw-bold">Please sign in</h1>

        <div class="form-floating">
            <input
                type="text"
                class="form-control"
                id="username"
                bind:value={username}
                placeholder="username"
            />
            <label for="floatingInput">Username</label>
        </div>
        <br />
        <div class="form-floating">
            <input
                type="password"
                class="form-control"
                id="floatingPassword"
                bind:value={password}
                placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
        </div>
        <br />
        <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
        </button>
    </form>
</div>
