const DevOpsCategorySection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">DevOps</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              DevOps consists of the words development and operations. The focus is on communication and collaboration between the development team and IT operations team and a variety of automated processes. With DevOps we can ensure the optimal operation of your software by building an infinite loop of continuous planning, development, feedback, release, operation and monitoring. This results in faster and easier releases, team efficiency, increased security, higher quality products and consequently happier teams and customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsCategorySection;
