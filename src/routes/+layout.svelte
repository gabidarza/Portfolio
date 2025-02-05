<script lang="ts">
    
    import "../reset.css"
    import "../app.css"

    const {children} = $props()

    import '@fontsource/poppins/400.css';
    import '@fontsource/poppins/500.css';
    import '@fontsource/poppins/500.css';
</script>

<svelte:head> 
    <title>
        Gabi Darza
    </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

</svelte:head>

<div class="layout-container">
<nav>
    <a href="/">Gabi Darza</a>
    <div>
        <a href="/about">About</a>
    </div>
</nav>

<main>
    {@render children()}
</main>
</div>

<style>
    main {
        padding: 16px;
    }
    nav {
        background-color: rgba(255,255,255,.75);
        backdrop-filter: blur(16px);
        color: black;
        display: flex;
        justify-content: space-between;
        padding: 16px;

        position: sticky;
        top: 0;
        left: 0;
        right: 0;

         a {
            color: black;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        
    }

    .layout-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: auto 1fr;

    }

</style>