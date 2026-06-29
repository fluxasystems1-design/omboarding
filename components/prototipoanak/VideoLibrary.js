import Image from "next/image";
import { ANAK_VIDEOS } from "./images";

export default function VideoLibrary() {
  return (
    <div className="anak-library">
      <div className="anak-container">
        <p className="anak-library__episode">episodio 01 — mueve con intención</p>
        <h3 className="anak-library__week">semana 1 — tu cuerpo es tu imperio</h3>

        <div className="anak-library__grid">
          {ANAK_VIDEOS.map((video) => (
            <article key={video.title} className="anak-library__card">
              <div className="anak-library__thumb">
                <Image src={video.image} alt={video.title} fill sizes="(max-width:768px) 50vw, 25vw" />
                <span className="anak-library__lock" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                  </svg>
                </span>
                <span className="anak-library__duration">{video.duration}</span>
              </div>
              <p className="anak-library__title">{video.title}</p>
            </article>
          ))}
        </div>

        <button type="button" className="anak-library__more">
          Mostrar todos los vídeos
        </button>
      </div>
    </div>
  );
}
