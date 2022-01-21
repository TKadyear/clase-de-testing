## Obtención del TLD

Dado una url. Devolver el TLD de la misma. Si no es posible, devolver un null.

## Ejemplos

getTLD(‘tahichemena.es’) ➞ ‘.es’

getTLD(‘epicgames.com/store/es-ES’) ➞ ‘.com’

getTLD(5666) ➞ null

getTLD(‘mojo_picón’) ➞ null



## Especificaciones

Cuidado cuando el TLD no es el final de la url. En ese caso habrá que extraerlo correctamente

El split es tu amigo.

Recomiendo usar TDD en este. Hay un caso que se puede pasar por alto si no.
