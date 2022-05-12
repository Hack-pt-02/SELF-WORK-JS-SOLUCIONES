
/* 14.- Sustituir la palabra "contigo" por la palabra "yo"  sin crear una nueva cadena y imprimir la nueva cadena en consola:
    --> let string = “Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!"
    --> let string = “Hey Tú, cómo te llamas. ¡Hey, estoy hablando yo!" */

/* Usar .replace para reemplazar alguna palabra de la frase */
let string = `Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!`.replace("contigo", "yo");
console.log(string);