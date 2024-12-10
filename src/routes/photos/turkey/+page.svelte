
<div class="container">

    <img src="/images/kite.jpg" alt="">
    <img src="/images/kite.jpg" alt="">
    
</div>
<style>
    img {
        max-width: 100%;
        height: auto;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 16px;
        padding: 16px;
       
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 480px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>