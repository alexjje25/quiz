import { useEffect, useState } from "react";
import { TesteView } from "@/styles/layouts/Teste/TesteView";

export default function Regulamento() {
    const [run, setRun] = useState();
    
    useEffect(() => {
        $(".animated-progress span").each(function () {
            $(this).animate(
              {
                width: $(this).attr("data-progress") + "%",
              },
              1000
            );
            $(this).text($(this).attr("data-progress") + "%");
          });
      });
    

  return (
    <TesteView>
      <div className="animated-progress progress-blue">
        
        <span data-progress="30">2</span>
        
      </div> 
    {/* <div className='wrapper'>
      <div className='traço'>
      </div>
      <div className='bolinha'>
            
        </div>
    </div> */}
      </TesteView>
  );
}
