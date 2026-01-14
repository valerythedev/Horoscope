// Get the values of the birthdate
// depending on the date of birth assign zodiac

// Event listeners
document.querySelector('#YouAreAStar').addEventListener('click', zodiaCal);
document.querySelector('#clearButton').addEventListener('click', clearResults);

function zodiaCal() {
  // Hide previous results and show loading spinner
  document.getElementById('constellation').style.display = 'none';
  document.getElementById('zodiaDefinition').style.display = 'none';
  document.getElementById('clearButton').style.display = 'none';
  document.getElementById('zodiacSign').innerText = '';
  document.getElementById('loadingSpinner').style.display = 'flex';
  
  // we're creating a variable, and we don't know what the zodiac sign is yet so we asign it nothing
  let birthDate = Number(document.getElementById("birthdate").value); 
  console.log(birthDate)
  let birthMonth = Number(document.getElementById("birthmonth").value);
  console.log(birthMonth)
  let zodiacSign = "";
  let constellation = document.querySelector('#constellation')
  let zodiacMeaning = "";

  // here we're deciding what the zodiac sign is.
  if ((birthMonth == 1 && birthDate <= 20) || (birthMonth == 12 && birthDate >= 22)) {
    zodiacSign = "Capricorn";
    constellation.src ="img/Zodiac/10.svg";
    zodiacMeaning = "Capricorns are known for their ambition and determination, often setting high goals for themselves and working hard to achieve them. They are typically responsible and disciplined individuals who excel in their careers and take their responsibilities seriously. Capricorns value stability and are known for their practicality and grounded nature. Element: Earth"
  } else if ((birthMonth == 1 && birthDate >= 21) || (birthMonth == 2 && birthDate <= 18)) {
    zodiacSign = "Aquarius";
    constellation.src = "img/Zodiac/11.svg"
    zodiacMeaning ="Aquarius is the eleventh sign of the zodiac, representing individuals with a distinctive and independent nature. Known for their intellectual prowess and innovative thinking, Aquarians thrive on breaking free from traditional norms and embracing progressive ideas. These individuals possess a deep sense of curiosity, often engaging in thought-provoking conversations and valuing intellectual stimulation. With their visionary mindset and humanitarian spirit, Aquarians are driven to make a positive impact on the world, advocating for equality, social justice, and collective well-being. Their unique blend of independence, intellect, and compassion sets them apart as forward-thinking individuals who strive to create a better future for all. Element: Air"
  } else if ((birthMonth == 2 && birthDate >= 19) || (birthMonth == 3 && birthDate <= 20)) {
    zodiacSign = "Pisces";
    constellation.src = "img/Zodiac/12.svg"
    zodiacMeaning ="Pisces is the twelfth sign of the zodiac, representing individuals with a compassionate and imaginative nature. Known for their deep emotional sensitivity, Pisceans possess a natural empathy and understanding of others. They are often characterized as dreamers and escapists, with a rich inner world and a strong connection to their intuition. These individuals are highly creative and often excel in artistic pursuits, using their imagination to bring beauty and meaning to the world. With their selfless and compassionate nature, Pisceans are inclined towards acts of kindness and often find fulfillment in helping others. Their intuitive nature and ability to empathize make them great listeners and sources of support for those around them. Element: Water"
  } else if ((birthMonth == 3 && birthDate >= 21) || (birthMonth == 4 && birthDate <= 20)) {
    zodiacSign = "Aries";
    constellation.src = "img/Zodiac/1.svg"
    zodiacMeaning ="Aries is the first sign of the zodiac, representing individuals with a dynamic and energetic nature. Known for their boldness and enthusiasm, Arians are natural-born leaders and initiators. They possess a strong drive and determination, always ready to take on new challenges with courage and confidence. Arians are known for their pioneering spirit, often blazing their own trails and fearlessly pursuing their goals. With their fiery energy and competitive nature, they thrive in situations that require action and assertiveness. Their enthusiasm and charisma make them natural motivators and inspirations to those around them, often igniting passion and enthusiasm in others. Arians are quick to embrace new adventures and are always eager to make their mark on the world. Element: Fire"
  } else if ((birthMonth == 4 && birthDate >= 21) || (birthMonth == 5 && birthDate <= 20)) {
    zodiacSign = "Taurus";
    constellation.src = "img/Zodiac/2.svg"
    zodiacMeaning ="Taurus is the second sign of the zodiac, representing individuals with a grounded and reliable nature. Known for their practicality and strong sense of stability, Taureans are dependable and trustworthy individuals. They possess a deep appreciation for beauty, often enjoying the pleasures of life such as good food, art, and comfort. Taureans are known for their strong determination and persistence, often working diligently towards their goals. With their strong connection to the earth element, they have a natural affinity for nature and enjoy a sense of security and routine. Their loyal and patient nature makes them excellent friends and partners, always ready to provide a steady presence and support to their loved ones. Element: Earth"
  } else if ((birthMonth == 5 && birthDate >= 21) || (birthMonth == 6 && birthDate <= 20)) {
    zodiacSign = "Gemini";
    constellation.src = "img/Zodiac/3.svg"
    zodiacMeaning ="Gemini is the third sign of the zodiac, representing individuals with a versatile and intellectual nature. Known for their curiosity and quick thinking, Geminis are adept at adapting to various situations and thrive in social settings. They possess a natural gift for communication, often engaging in witty and lively conversations. Geminis have a dual nature, symbolized by the Twins, which manifests as a constant need for mental stimulation and variety. Their agile minds allow them to grasp new concepts easily, and they excel in multi-tasking. With their sociable and outgoing personality, Geminis have a wide circle of friends and enjoy exploring different perspectives. They are natural learners, always seeking knowledge and eager to share their discoveries with others. Element: Air"
  } else if ((birthMonth == 6 && birthDate >= 21) || (birthMonth == 7 && birthDate <= 22)) {
    zodiacSign = "Cancer";
    constellation.src = "img/Zodiac/4.svg"
    zodiacMeaning ="Cancer is the fourth sign of the zodiac, representing individuals with a nurturing and intuitive nature. Known for their deep emotional sensitivity, Cancers are highly attuned to the needs and feelings of those around them. They possess a strong sense of empathy and are often seen as the caretakers and protectors of their loved ones. Cancers value their home and family greatly, seeking security and emotional comfort in their personal space. With their intuitive nature and strong instincts, they have a keen understanding of others' emotions and can provide a nurturing presence during times of need. Cancers are known for their loyalty and dedication, creating strong bonds with their loved ones that last a lifetime. Their gentle and compassionate nature makes them natural peacemakers, always striving to create harmony in their relationships. Element: Water"
  } else if ((birthMonth == 7 && birthDate >= 23) || (birthMonth == 8 && birthDate <= 22)) {
    zodiacSign = "Leo";
    constellation.src = "img/Zodiac/5.svg"
    zodiacMeaning ="Leo is the fifth sign of the zodiac, representing individuals with a confident and charismatic nature. Known for their radiant energy and magnetic personality, Leos often take center stage wherever they go. They possess a natural flair for drama and love to be admired and appreciated. Leos have a strong sense of self-expression and creativity, often pursuing artistic endeavors or leadership roles. With their regal and dignified presence, they command attention and inspire others with their passion and enthusiasm. Leos are natural-born leaders, taking charge and inspiring those around them to reach their full potential. Their warm-hearted and generous nature make them loyal and supportive friends, always ready to shine a light on others' accomplishments. Element: Fire"
  } else if ((birthMonth == 8 && birthDate >= 23) || (birthMonth == 9 && birthDate <= 22)) {
    zodiacSign = "Virgo";
    constellation.src = "img/Zodiac/6.svg"
    zodiacMeaning ="Virgo is the sixth sign of the zodiac, representing individuals with a practical and analytical nature. Known for their attention to detail and meticulousness, Virgos have a strong sense of organization and strive for perfection in their pursuits. They possess a keen intellect and an analytical mindset, often excelling in problem-solving and critical thinking. Virgos are highly observant and have a sharp eye for spotting errors or inconsistencies. With their methodical approach, they excel in tasks that require precision and accuracy. Virgos are often dedicated to serving others and have a strong sense of duty, making them reliable and dependable individuals. Their practicality and efficiency make them valuable assets in both professional and personal settings. Element: Earth"
  } else if ((birthMonth == 9 && birthDate >= 23) || (birthMonth == 10 && birthDate <= 22)) {
    zodiacSign = "Libra";
    constellation.src = "img/Zodiac/7.svg"
    zodiacMeaning ="Libra is the seventh sign of the zodiac, representing individuals with a harmonious and diplomatic nature. Known for their sense of balance and fairness, Librans strive for justice and equality in all aspects of life. They possess a natural charm and grace, often radiating a sense of harmony and peace. Librans have a strong desire for harmonious relationships and are skilled at navigating conflicts and finding compromises. With their keen sense of aesthetics, they have an appreciation for beauty and seek to create environments that are visually pleasing and harmonious. Librans are often skilled communicators and mediators, valuing cooperation and collaboration. Their ability to see multiple perspectives and weigh different opinions makes them skilled at making decisions that benefit all parties involved. Element: Air"
  } else if ((birthMonth == 10 && birthDate >= 23) || (birthMonth == 11 && birthDate <= 22)) {
    zodiacSign = "Scorpio";
    constellation.src = "img/Zodiac/8.svg"
    zodiacMeaning ="Scorpio is the eighth sign of the zodiac, representing individuals with a passionate and intense nature. Known for their depth and emotional strength, Scorpios have a mysterious and magnetic aura. They possess a keen intuition and are highly perceptive, often picking up on subtle cues and hidden meanings. Scorpios are deeply loyal and protective of their loved ones, and their passionate nature drives them to forge deep connections with others. With their innate sense of power and resilience, they can overcome challenges and transform themselves through personal growth. Scorpios are often associated with transformation and rebirth, as they have the ability to rise from the ashes and emerge stronger than ever. Their determination and unwavering focus make them formidable individuals, capable of achieving great success in their endeavors. Element: Water"
  } else if ((birthMonth == 11 && birthDate >= 23) || (birthMonth == 12 && birthDate <= 21)) {
    zodiacSign = "Sagittarius";
    constellation.src = "img/Zodiac/9.svg"
    zodiacMeaning ="Sagittarius is the ninth sign of the zodiac, representing individuals with an adventurous and optimistic nature. Known for their love of freedom and exploration, Sagittarians have a restless spirit and a thirst for knowledge. They possess a philosophical mindset and are constantly seeking the deeper meaning of life. Sagittarians are natural-born travelers, drawn to new experiences and different cultures. Their open-mindedness and enthusiasm make them excellent storytellers and conversationalists, often captivating others with their tales and perspectives. With their optimistic outlook, Sagittarians inspire others to embrace the joy of living and to embrace new opportunities with enthusiasm. Their fiery spirit and belief in possibilities make them natural leaders, always ready to embark on new adventures and inspire others to follow their path. Element: Fire"
  }
  // Hide loading spinner and show results with a smooth transition
  setTimeout(() => {
    document.getElementById('loadingSpinner').style.display = 'none';
    
    // here we're showing what the zodiac sign is
    document.getElementById("zodiacSign").innerText = zodiacSign;
    document.getElementById('zodiaDefinition').innerText = zodiacMeaning;
    
    // Show the constellation image, description, and clear button
    constellation.style.display = 'block';
    document.getElementById('zodiaDefinition').style.display = 'block';
    document.getElementById('clearButton').style.display = 'block';
  }, 800); // Small delay to show the loading animation
}

function clearResults() {
  // Reset form
  document.getElementById("birthdate").value = "";
  document.getElementById("birthmonth").value = "";
  
  // Reset results section
  document.getElementById("zodiacSign").innerText = "ZODIAC CONSTELLATION";
  document.getElementById('loadingSpinner').style.display = 'none';
  document.getElementById('constellation').style.display = 'none';
  document.getElementById('constellation').src = "";
  document.getElementById('zodiaDefinition').style.display = 'none';
  document.getElementById('zodiaDefinition').innerText = "";
  document.getElementById('clearButton').style.display = 'none';
}
