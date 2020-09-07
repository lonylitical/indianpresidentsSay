const quotes=
[
    {
    name:'RAJENDRA PRASAD(1950-62)',
    quotee:' In attaining our ideals, our means should be as pure as the end!'
    },
    {
     name:'SARVEPALLI RADHAKRISHNAN(1962-67)',
     quotee:'Knowledge gives us power, love gives us the fullness'   
    },
    {
    name:'ZAKIR HUSSAIN(1967-69)',
    quotee:'Our sweat is the answer to all our problems, and that the tiller, the artisan and the teacher are the three agents who feed the body, mind and soul.'  
    },
    {
    name:'V.V. Giri(1969-74)',
    quotee:'Education is the principal tool of socio-economic development and unless all societies are provided with right type of education, adequate in quality and quantity, it will not be possible to tackle satisfactorily the problem of ignorance of health and poverty which afflicts the majority of human beings in the world.'  
    },
    {
    name:'FAKHRUDDIN ALI AHMED(1974-77)',
    quotee:'How does the press manage to come out with the controversial bits in the cabinet meeting? . '
    },
    {
    name:'NEELAM SANJIVA REDDI(1977-82)',
    quotee:'Without fear or favour whatever successes I have been able to make of my life, I owe to the leadership of Mahatma Gandhi who could make man out of dust. I was greatly inspired in my youth by a remark Jawaharlal Nehru had made, ‘Success comes to those that dare and act...’ In fact this remark was my motto in life.'    
    },
    {
    name:'GIANI ZAIL SINGH(1982-87)',
    quotee:' I had no love for office or power. I could walk out any time. I was like a sojourner in an inn.'   
    },
    {
    name:'RAMASWAMY VENKATAR(1987-1992)',
    quotee:'Anyone and everyone can join politics today. The days newspapers were on the table in front of him. All he needs to do is to show enough money towards his electability, enough vote-bank numbers on his side, and he gets a ticket.'
    },
    {
    name:'SHANKAR DAYAL SHARMA(1992-97)',
    quotee:'The democratic outlook is strengthened by such awareness of experience accumulated through history in different parts of the world. '
    },
    {
    name:'K.R. NARAYANAN(1997-2002)',
    quotee:'Enlightened people like Osho are ahead of their times. It is good that more and more young people are now reading his works.'    
    },
    {
    name:'A.P.J. ABDUL KALAM(2002-07)',
    quotee:'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.'    
    },
    {
    name:'PRATIBHA PATIL(2007-12)',
    quotee:'There is simply no way our nation can progress if its women population is left behind. '    
    },
    {
    name:'PRANAB MUKHERJEE(2012-17)',
    quotee:'There must be for legitimate criticism and dissent .'    
    },
    {
    name:'RAM NATH KOVIND(2017-now)',
    quotee:'Nature does not compartmentalise. Its instinct is integrative and holistic. '    
    }
]

const quoteBtn=document.querySelector("#quoteBtn");
const quoteAuthor=document.querySelector("#quoteAuthor");
const quotee=document.querySelector("#quotee");
  
quoteBtn.addEventListener('click',quotedisplay);
function quotedisplay()
{
    let number=Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML=quotes[number].name;
    quotee.innerHTML=quotes[number].quotee;
}