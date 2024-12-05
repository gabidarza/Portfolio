<script lang="ts">
    
    import "../app.css"
    const {children} = $props()
</script>

<nav>
    <a href="/">Gabi Darza</a>
    <div>
        <a href="/photos">Photos</a>
        <a href="/info">Info</a>
        <a href="/info">Test for redeploy</a>
    </div>
</nav>

<main id="main-render-children-inside">
    {@render children()}
</main>

<style>
    nav {
        color: black;
        display: flex;
        justify-content: space-between;

        > div {
            background-color: lightblue;

            > a {
                color: black;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

</style>