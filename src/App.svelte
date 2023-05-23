<script lang="ts">
  import Dashboard from "./components/dashboard/dashboard.svelte";
  import Login from "./components/login/login.svelte";
  import { user } from "./stores";
</script>

<main>
  {#if $user.login}
    <Dashboard />
  {:else}
    <Login />
  {/if}
</main>

<style>
</style>
