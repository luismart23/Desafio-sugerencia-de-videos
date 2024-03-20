// IIFE
const ReproductorVideo = (() => {
    const mostrarVideo = (url, id) => {
        const elemento = document.getElementById(id);
        elemento.setAttribute("src", url);
    };

    return {
        reproducir: (url, id) => {
            mostrarVideo(url, id);
        }
    };
})();

class Multimedia {
    #url;

    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }

    setInicio(tiempo) {
        return `Este método es para realizar un cambio en la URL del video, empezando desde ${tiempo} segundos.`;
    }
}

class Reproductor extends Multimedia {
    #id;

    constructor(url, id) {
        super(url);
        this.#id = id;
    }

    playMultimedia() {
        ReproductorVideo.reproducir(this.url, this.#id);
    }

    setInicio(tiempo) {
        // Verificar si ya hay parámetros en la URL
        const separator = this.url.includes('?') ? '&' : '?';
        const nuevaUrl = `${this.url}${separator}start=${tiempo}`;
        ReproductorVideo.reproducir(nuevaUrl, this.#id);
    }
}

// Instancias y reproducción de multimedia
const musica = new Reproductor("https://www.youtube.com/embed/dWgG3bnVUS0?si=GuPWgPJ531eiQg-6", "domMusica");
musica.playMultimedia();

const pelicula = new Reproductor("https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd", "domPelicula");
pelicula.playMultimedia();

const serie = new Reproductor("https://www.youtube.com/embed/a1zmhHLVrq0?si=iuky9OuRIVGZ-BCA", "domSerie");
serie.playMultimedia();

// Modificar el tiempo de inicio de una instancia
musica.setInicio(23);
pelicula.setInicio(7);
serie.setInicio(15);