let dd=fetch("./data.json") /*require('./data.json') */

function ff() {
    const jp = dd.filter((account) => {
        return account.isActive=true;
      });
      { jp: []
      console.log(jp);
  }
}

function hv() {
    const hp = dd.map((account) => {
        return account.balance=true;
      })
      { hp: []
      console.log(hp);
      
  }
}

  function all() {
    const fa = dd.filter((account) => {
        return account.friends;
      });
      { fa: []
      console.log(fa);
  }
}

  function allname() {
    const  an= dd.reduce((account) => {
        return account.friends.name;
      });
      { an: []
      console.log(an);
    }
  }
  
