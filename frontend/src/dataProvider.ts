export const dataProvider = {
    getList: async (resource: string, params: any) => {
      const response = await fetch(`${import.meta.env.VITE_JSON_SERVER_URL}/${resource}`);
      const data = await response.json();
  
      return {
        data: data,
        total: data.length,
      };
    },
  
    getOne: async (resource: string, params: any) => {
      const response = await fetch(`${import.meta.env.VITE_JSON_SERVER_URL}/${resource}/${params.id}`);
      const data = await response.json();
  
      return { data };
    },
  };