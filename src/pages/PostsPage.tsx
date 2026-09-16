import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import "./PostsPage.css"; 

// Interfaz adaptada a los datos de Rick and Morty
interface Personaje {
  id: number;
  name: string;
  species: string;
  image: string;
}

const PostsPage: React.FC = () => {
  // 1: Crear el estado para almacenar publicaciones (adaptado a personajes).
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  // 2 y 9: Crear el estado para saber si los datos se están cargando (inicia en false).
  const [cargando, setCargando] = useState(false);

  // 3 y 10: Crear el estado para almacenar errores (inicia vacío).
  const [error, setError] = useState("");

  const cargarPosts = () => {
    // - Indicar que comenzó la carga y limpiar errores previos.
    setCargando(true);
    setError("");

    // - Utilizar fetch() para consultar la API
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        return response.json();
      })
      .then((datos) => {
        // 6: Guardar los datos en el estado
        setPersonajes(datos.results);
      })
      .catch((error) => {
        // 10: Manejo de errores exacto como lo pide la guía
        console.error(error);
        setError("Ocurrió un error al cargar los personajes.");
      })
      .finally(() => {
        // 9: Apagar el estado de carga al finalizar, pase lo que pase
        setCargando(false);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Taller 4: Ionic + React + APIs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="intro">
          <h1>Personajes de Rick y Morty</h1>
          <p>
            Presiona el botón para obtener información desde la API.
          </p>

          {/* 7: Ejecutar la función con un botón */}
          <IonButton onClick={cargarPosts} disabled={cargando}>
            {cargando ? 'Cargando...' : 'CARGAR PERSONAJES'}
          </IonButton>
        </div>

        {/* 5 y 9: Mostrar un estado de carga */}
        {cargando && (
          <div className="estado" style={{ textAlign: 'center', margin: '20px 0' }}>
            <IonSpinner name="crescent" color="primary" />
            <p>Cargando personajes...</p>
          </div>
        )}

        {/* 10: Mostrar el mensaje de error al usuario */}
        {error !== "" && (
          <IonText color="danger">
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{error}</p>
          </IonText>
        )}

        <div className="posts-container">
          {/* 8: Mostrar publicaciones (personajes) con map() y la propiedad key */}
          {personajes.map((personaje) => (
            <IonCard key={personaje.id}>
              <img src={personaje.image} alt={personaje.name} />
              
              <IonCardHeader>
                <IonCardTitle>
                  #{personaje.id} - {personaje.name}
                </IonCardTitle>
              </IonCardHeader>
              
              <IonCardContent>
                <p>Especie: {personaje.species}</p>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PostsPage;