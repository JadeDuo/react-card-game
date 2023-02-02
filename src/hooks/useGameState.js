import { useState, useEffect } from 'react';

const useGameState = (initial) => {
  const [player, setPlayer] = useState(1);
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [turn, setTurn] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [battlefield, setBattlefield] = useState({
    lanes: {
      left: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
      center: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
      right: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return [    player, setPlayer,
              deck, setDeck,
              hand, setHand,
              turn, setTurn,
              energy, setEnergy,
              battlefield, setBattlefield  ];
};

export default useGameState;