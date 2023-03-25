import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useCurrentFrame,
	spring,
  Img,
} from 'remotion/.';

export const Triangulos: React.FC = () => {

	return (


   <div> 

      <div
        style={{
          width: 0,
          height: 0,
          borderBottom: '720px solid yellow',
          borderRight: '1280px solid transparent',
         
        }}
      > 

<Img 	src={staticFile('ImgTrianguloAbajoIzquierda.png')} style={

{  translate: '500px 0'
}

}/>

      </div>


     

    <div
        style={{
          width: '200px',
          height: '200px',
          borderTop: '1px solid red ',
          borderLeft: '1px solid red',
          background: 'null',
          translate:' 0 -720px',
          position: 'relative',
          overflow: 'hidden'
          
        }}
      >

<Img 	src={staticFile('ImgTrianguloArribaDerecha.png')} style={

{  translate: '500px 0'
}

}/>

   
    

      </div>
    



      
    
  </div>


	
    );
};
