// ejemplos de uso: simular valores de retorno

const mock = jest.fn()
mock.mockReturnValue("retorna un valor que es fijo")
mock.mockReturnValueOnce( "valor que retorna en la primera llamada")

//simular implementacion
mock.mockImplementation((x)=> x * 2)

// limpiar el historial de llamadas
mock.mockClear();

// verificar si fue llamado con argumentos especificos:
expect(mock).toHaveBeenCalledWith("un argumento que se espere")