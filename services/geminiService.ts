import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMenuRecommendation = async (userPreference: string): Promise<string> => {
  try {
    const menuContext = MENU_ITEMS.map(item => 
      `${item.name} (${item.category}): ${item.description} - R$ ${item.price.toFixed(2)}`
    ).join('\n');

    const systemInstruction = `
      Você é o "Luigi", o Pizzaiolo Virtual da 'La Mamma Pizzeria', uma pizzaria tradicional italiana e sofisticada.
      Seu objetivo é sugerir UMA pizza ou vinho do cardápio baseado no gosto do cliente.
      
      Regras:
      1. Use um tom caloroso, italiano (pode usar expressões como "Mamma Mia!", "Buonissimo!", mas fale em Português).
      2. Baseie-se APENAS nos itens do cardápio fornecidos abaixo.
      3. Valorize a massa de fermentação natural e o forno a lenha.
      4. Seja breve e convincente (máximo de 3 frases).
      
      Cardápio Atual:
      ${menuContext}
    `;

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userPreference,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });

    return response.text || "Scusi! O forno está muito quente, não consegui te ouvir. Pode repetir?";
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "Mamma mia! Tive um problema na cozinha. Que tal provar nossa Margherita clássica?";
  }
};