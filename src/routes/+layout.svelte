<script lang="ts">
    
    import "../reset.css"
    import "../app.css"

    const {children} = $props()
</script>

<nav>
    <a href="/">Gabi Darza</a>
    <div>
        <a href="/photos">Photos</a>
        <a href="/info">Info</a>
    </div>
</nav>

<main id="main-render-children-inside">
    {@render children()}
</main>

<style>
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

</style>