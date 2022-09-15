/*
GLTF Exporter class adapted from https://github.com/mrdoob/three.js/blob/master/examples/misc_exporter_gltf.html
This code is not intended to be used for comercial purposes. It serves as an utility class for demonstrating a small proof-of-concept only.
All rights reserved to the original creator.
*/

import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
export default class Exporter {
  constructor() {}

  exportGLTF(input) {
    const gltfExporter = new GLTFExporter();
    const self = this;

    gltfExporter.parse(
      input,
      function (result) {
        if (result instanceof ArrayBuffer) {
          self.saveArrayBuffer(result, "model.glb");
        } else {
          const output = JSON.stringify(result, null, 2);

          self.saveString(output, "model.gltf");
        }
      },
      function (error) {
        throw error;
      }
    );
  }

  save(blob, filename) {
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    link.href = URL.createObjectURL(blob);

    link.download = filename;

    link.click();

  }

  saveString(text, filename) {
    this.save(new Blob([text], { type: "text/plain" }), filename);
  }

  saveArrayBuffer(buffer, filename) {
    this.save(
      new Blob([buffer], { type: "application/octet-stream" }),
      filename
    );
  }
}
