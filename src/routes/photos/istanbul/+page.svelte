<div class="gallery-container">
    <div class="thumbnails"></div>
    <div class="slides">
      <div><img src="https://picsum.photos/id/1067/540/720"></div>
      <div><img src="https://picsum.photos/id/122/540/720"></div>
      <div><img src="https://picsum.photos/id/188/540/720"></div>
      <div><img src="https://picsum.photos/id/249/540/720"></div>
      <div><img src="https://picsum.photos/id/257/540/720"></div>
      <div><img src="https://picsum.photos/id/259/540/720"></div>
      <div><img src="https://picsum.photos/id/283/540/720"></div>
      <div><img src="https://picsum.photos/id/288/540/720"></div>
      <div><img src="https://picsum.photos/id/299/540/720"></div>
    </div>
  </div>

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

    /* Photo Gallery Scroll*/
    .gallery-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.thumbnails {
  position: absolute;
  bottom: 8px;
  display: flex;
  flex-direction: row;
  gap: 6px;
}

.thumbnails div {
  width: 8px;
  height: 8px;
  cursor: pointer;
  background: #aaa;
  border-radius: 100%;
}

.thumbnails div.highlighted {
  background-color: #777;
}

.slides {
  margin: 0 16px;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  width: 540px;
  padding: 0 0.25rem;
  height: 720px;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.slides > div {
  scroll-snap-align: start;
}

.slides img {
  width: 540px;
  object-fit: contain;
}

.slides::-webkit-scrollbar {
  display: none;
}

img {
  border-radius: 4px;
}

/* Unrelated styles */
:root {
  font-size: 18px;
}

body {
  height: 80vh;
  line-height: 1.5;
  font-family: sans-serif;
  display: grid;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 800px;
}

h2 {
  font-size: 24px;
}

h2 small {
  opacity: 0.7;
  font-weight: normal;
}
</style>