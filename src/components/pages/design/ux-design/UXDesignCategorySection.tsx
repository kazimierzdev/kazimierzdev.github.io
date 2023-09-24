const UXDesignCategorySection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">UX Design</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              UX design is all about user behavior while interacting with your software. Where does the user end up when he clicks on a certain button? What does the person think or feel? Does it get to the desired goal quickly or is frustration part of the user experience? The purpose of a well-thought-out UX design is to guide the user to the desired destination with short and intuitive clicks while at the same time offering them a unique experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXDesignCategorySection;
