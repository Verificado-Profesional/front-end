// TODO: REVEER TEXTOS

export const getVeracityResult = (
  classification: boolean,
  accuracy: number
): string => {
  const fixedAccuracy = Number((accuracy * 100).toFixed());
  const classificationText = classification ? 'verdadera' : 'falsa';
  if (fixedAccuracy >= 95) {
    return `¡Es ${classificationText}! `;
  } else if (fixedAccuracy >= 75) {
    return `Probablemente ${classificationText}`;
  } else if (fixedAccuracy >= 60) {
    return `Posiblemente ${classificationText}`;
  } else {
    return `Podría ser ${classificationText}`;
  }
};

export const getVeracityMessages = (
  classification: boolean,
  accuracy: number
): string => {
  const fixedAccuracy = Number((accuracy * 100).toFixed());
  const classificationText = classification ? 'cierta' : 'falsa';
  if (fixedAccuracy >= 95) {
    return `Esta noticia tiene una altísima probabilidad de ser ${classificationText}.`;
  } else if (fixedAccuracy >= 75) {
    return `Esta noticia tiene una alta probabilidad de ser ${classificationText}.`;
  } else if (fixedAccuracy >= 60) {
    return `Esta noticia tiene una probabilidad moderada de ser ${classificationText}.`;
  } else {
    return `Esta noticia tiene una probabilidad similar de ser verdadera o falsa.`;
  }
};

export const getSentimentResult = (
  classification: boolean,
  accuracy: number
): string => {
  const fixedAccuracy = Number((accuracy * 100).toFixed());
  const classificationText = classification ? 'positivo' : 'negativo';
  if (fixedAccuracy >= 95) {
    return classification ? '¡Excelente noticia!' : '¡Atención!';
  } else if (fixedAccuracy >= 75) {
    return classification ? '¡Muy buena noticia!' : '¡Ten cuidado!';
  } else if (fixedAccuracy >= 60) {
    return `Probablemente con enfoque ${classificationText}`;
  } else {
    return `El enfoque podría llegar a ser ${classificationText}`;
  }
};

export const getSentimentMessages = (
  classification: boolean,
  accuracy: number
): string => {
  const fixedAccuracy = Number((accuracy * 100).toFixed());
  if (fixedAccuracy >= 95) {
    return `Esta noticia tiene una altísima probabilidad de presentar un tono ${
      classification ? 'amigable y conciliador' : 'hostil y polarizador'
    }`;
  } else if (fixedAccuracy >= 75) {
    return `Esta noticia tiene una alta probabilidad de presentar un tono ${
      classification ? 'amigable y conciliador' : 'hostil y polarizador'
    }.`;
  } else if (fixedAccuracy >= 60) {
    return `Esta noticia tiene una probabilidad moderada de presentar un tono ${
      classification ? 'amigable y conciliador' : 'hostil y polarizador'
    }. `;
  } else {
    return 'Esta noticia tiene una probabilidad similar de presentar un enfoque positivo o negativo.';
  }
};

export const formatNumber = (number: number) => {
  return (number * 100).toFixed();
};
