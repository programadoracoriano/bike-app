import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

 const usePostData = (initialValues, validationSchema, onSubmitCallback, url) => {
      const [isLoading, setIsLoading] = useState(false);


      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, {resetForm}) => {
          setIsLoading(true);
          try {
            const response = await axios.post('https://django-server-production-fb0b.up.railway.app/' + url, 
            values);
            onSubmitCallback(response.data);
            if(response.data.success){
              resetForm()
            };
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
            
          }
        },
      });

      return { formik, isLoading };
        
    
      

    
    
    
}

export default usePostData;