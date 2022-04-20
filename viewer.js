/*zoom and pan*/
var viewer = OpenSeadragon({
    id: "seadragon-viewer",
  prefixUrl: "http://gams.uni-graz.at/o:sker.01/IMAGE.018",
  tileSources: album,
});


var album = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "http://gams.uni-graz.at/o:sker.01/IMAGE.018",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  "13920",
        Height: "10200"
      }
    }
  };

/*toolbar:       "toolbarDiv",toolbar
visibilityRatio: 1.0,
constrainDuringPan: true,
showNavigator:  true, viewport navigator
// Initial rotation angle
degrees: 0,
// Show rotation buttons
showRotationControl: true,
// Enable touch rotation on tactile devices
gestureSettingsTouch: {
    pinchRotate: true
} */