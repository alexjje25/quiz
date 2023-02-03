import React, { useEffect, useRef, useState } from 'react'
import { TesteView } from "@/styles/layouts/Teste/TesteView";
// import TabLine from "@/components/TabLine/TabLine";

export default function Regulamento() {
  const [open, setOpen] = React.useState(false);
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00');
    

    const [startGameCount, setStartGameCount] = useState(3)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        const { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
              (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer('10');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        const deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

  useEffect(() => {
    setTimeout(() => {
      if (startGameCount>=0) {
        setStartGameCount(startGameCount -  1)
      }
    }, 1000);
  }, [startGameCount]);

  useEffect(() => {
    if (timer === '00' ){
      console.log('acabou o tempo ');
    }
  }, [timer]);

  useEffect(() => {
    console.log(startGameCount)
    if (startGameCount<=0) {
      clearTimer(getDeadTime());
    }
  }, [startGameCount]);

  return (
    <TesteView>
      <div >
      
        <p className='clockMinutes'>{timer}</p>
      </div>
      {/* <TabLine /> */}
    </TesteView>
  );
}
