const imageModules = import.meta.glob("../static/images/*.{jpg,png,JPG,PNG,jpeg,JPEG}");

  export const paths = imageModules.map((module) => {
    const path = module.
  })