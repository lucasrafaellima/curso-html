let curso = [{nomeCurso:"html",carga:35,sala:4}, {nomeCurso:"python",carga:40,sala:3},
{nomeCurso:"php",carga:35,sala:2},{nomeCurso:"css",carga:25,sala:1}]

for (let i =0; i < curso.length ; i++) {
    document.write(curso[i].nomeCurso+" ");
    document.write(curso[i].carga+" ");
    document.write("sala "+curso[i].sala+" ");
}

let escolha = String(prompt("digite nome do curso que deseja cursar: "));

for (let i = 0; i < curso.length; i++) {
    if (curso[i].nomeCurso == escolha) {
        document.write("\nseu curso é: "+"\n"+curso[i].nomeCurso+" "+curso[i].carga+" horas sala "+curso[i].sala);
    }
}
