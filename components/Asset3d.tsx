import { Color3, Color4, Vector3 } from '@babylonjs/core';
import { Suspense, useCallback, useState } from 'react';
import { Engine, Model, Scene } from 'react-babylonjs';
import '@babylonjs/loaders/glTF';


const Asset3d = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const setIsLoadedAssests = useCallback(
    () => setIsLoaded(true),
    [setIsLoaded],
  );

  return (
    <div
      className='asset-3d'
      role='button'
      tabIndex={0}
    >
      {!isLoaded && <div>Loading ...</div>}
      <Engine adaptToDeviceRatio antialias canvasId='asset-3d'>
        <Scene clearColor={new Color4(0, 0, 0, 0)}>
          <arcRotateCamera
            name='asset-3d-camera'
            alpha={Math.PI / 3}
            beta={Math.PI / 2}
            radius={0.03}
            target={new Vector3(0, 0, 0)}
            minZ={0.0001}
            // lowerRadiusLimit={0.3}
            // upperRadiusLimit={3}
            noPreventDefault={false}
            wheelDeltaPercentage={0.01}
          />
          <spotLight
            name='light-back'
            direction={new Vector3(0, 0, Math.PI)}
            intensity={150}
            angle={180}
            exponent={5}
            diffuse={Color3.White()}
            specular={Color3.White()}
            position={new Vector3(0, 0, -10)}
          />
          <spotLight
            name='light-front'
            direction={new Vector3(0, 0, -Math.PI)}
            intensity={200}
            angle={180}
            exponent={5}
            diffuse={Color3.White()}
            specular={Color3.White()}
            position={new Vector3(0, 0, 10)}
          />
          <spotLight
            name='light-left'
            direction={new Vector3(Math.PI, 0, 0)}
            intensity={150}
            angle={180}
            exponent={5}
            diffuse={Color3.White()}
            specular={Color3.White()}
            position={new Vector3(-10, 0, 0)}
          />
          <spotLight
            name='light-right'
            direction={new Vector3(-Math.PI, 0, 0)}
            intensity={150}
            angle={180}
            exponent={5}
            diffuse={Color3.White()}
            specular={Color3.White()}
            position={new Vector3(10, 0, 0)}
          />
          <Suspense fallback='loading'>
            <Model
              name='asset-3d-model'
              sceneFilename='BoomBox.gltf'
              rootUrl='https://playground.babylonjs.com/scenes/BoomBox/'
              position={new Vector3(0, 0, 0)}
              rotation={new Vector3(0, 0, 0)}
              onCreated={setIsLoadedAssests}
            />
          </Suspense>
        </Scene>
      </Engine>
    </div>
  );
};

export default Asset3d;