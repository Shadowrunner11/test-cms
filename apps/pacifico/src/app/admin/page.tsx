'use client'
import { useEffect } from "react";


export default function Admin(){
  useEffect(()=>{
    import('decap-cms-app')
      .then(({default: CMS}) => CMS.init({
        config:{
          media_folder:'/media',
          media_library:{
            name: 'library'
          },
          collections:[
            {
              fields:[
                {label: "Layout", name: "layout", widget: "hidden", default: "blog"},
                {label: "Title", name: "title", widget: "string"}
              ],
              create: true,
              folder: '_posts/blog',
              name: 'Test',
              label: 'test'
            }
          ],
          backend: {
            branch: 'main',
            name: 'git-gateway'
          }
        }
      }))

  }, [])
}
