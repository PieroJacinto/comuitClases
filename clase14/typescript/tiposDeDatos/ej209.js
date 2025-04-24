var IconsSize;
(function (IconsSize) {
    IconsSize[IconsSize["SMALL"] = 8] = "SMALL";
    IconsSize[IconsSize["MEDIUM"] = 12] = "MEDIUM";
    IconsSize[IconsSize["LARGE"] = 24] = "LARGE";
    IconsSize[IconsSize["XL"] = 48] = "XL";
})(IconsSize || (IconsSize = {}));
var icono = {
    nombre: "wave",
    tamanio: IconsSize.XL,
};
function showIcon(nombre, tamanio) {
    console.log("El nombre del icono es ".concat(nombre, " y su tama\u00F1o es de ").concat(tamanio, " puntos"));
}
showIcon(icono.nombre, icono.tamanio);
showIcon("muscle", IconsSize.SMALL);
