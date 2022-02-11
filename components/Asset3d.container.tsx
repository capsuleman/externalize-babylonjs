import { useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";

const Asset3d = dynamic(() => import('./Asset3d'))

const Asset3dContainer = () => {
  const [isBabylonScriptLoaded, setIsBabylonScriptLoaded] = useState(false);
  const [isBabylonGUIScriptLoaded, setIsBabylonGUIScriptLoaded] =
    useState(false);
  const [isBabylonScriptsAllLoaded, setIsBabylonScriptsAllLoaded] =
    useState(false);

  return (
    <div className="asset-3d">
      <Script
        id="babylonjs-core"
        onLoad={() => setIsBabylonScriptLoaded(true)}
        src="https://unpkg.com/babylonjs@4.2.0/babylon.js"
      />
      {isBabylonScriptLoaded && (
        <Script
          id="babylonjs-gui"
          onLoad={() => setIsBabylonGUIScriptLoaded(true)}
          src="https://unpkg.com/babylonjs-gui@4.2.0/babylon.gui.min.js"
        />
      )}
      {isBabylonGUIScriptLoaded && (
        <Script
          id="babylonjs-loaders"
          onLoad={() => setIsBabylonScriptsAllLoaded(true)}
          src="https://unpkg.com/babylonjs-loaders@4.2.0/babylonjs.loaders.min.js"
        />
      )}

      {isBabylonScriptsAllLoaded && <Asset3d />}
    </div>
  );
};

export default Asset3dContainer;
