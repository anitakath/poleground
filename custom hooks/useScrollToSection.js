

const useScrollToSection = () =>{


    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return{scrollToSection}
}

export default useScrollToSection