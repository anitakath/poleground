const useScrollToSection = () => {
    const scrollToSection = (id) => {
        if (id === "top") {
            // Zuerst zum Element mit der ID "top" scrollen
            const topSection = document.getElementById("top");
            if (topSection) {
                topSection.scrollIntoView({ behavior: 'smooth' });

                // Nach 0,5 Sekunden zum Element mit der ID "header" scrollen
                setTimeout(() => {
                    const headerSection = document.getElementById("header");
                    if (headerSection) {
                        headerSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500); // 500 Millisekunden warten
            }
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return { scrollToSection };
};

export default useScrollToSection;


/*const useScrollToSection = () => {
    const scrollToSection = (id) => {
        if (id === "top") {
            // Scrollt zum Anfang der Seite
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return { scrollToSection };
};

export default useScrollToSection;
*/