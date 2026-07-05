interface HeaderProps{
    number:string,
    title:string
}
export default function HeaderSection({
    number, title
}:HeaderProps){
    return(
         <section className="experience-section" id="experience">

      <span className="experience-subtitle">
          {`// ${number}.`}
      </span>

      <h2 className="experience-title">
        {title}
      </h2>
      </section>
    )
}