const request = require('request-promise').defaults({ jar: true }); // jar, to save cookies
const fs = require('fs');
require("dotenv").config();

async function main() {
  try {
    // const html = await request.post('https://accounts.craigslist.org/login', {
    //   form: {
    //     inputEmailHandle: 'erenyusufduran1905@gmail.com',
    //     inputPassword: process.env.password,
    //   },
    //   headers: {
    //     Referer: 'https://accounts.craigslist.org/login',
    //   },
    //   simple: false,
    //   followAllRedirects: true,
    // });
    // fs.writeFileSync('./login.html', html);

    const settingsHtml = await request.get("https://accounts.craigslist.org/login/home?show_tab=settings", {
      headers: {
        cl_session: "Wuk97gAQLCCjpFCvtwfBHUWjpxDJE1yh2XjW5glPUgtV5U9o8U1YiBwB7Jt7fROr" , 
        cl_b: "4%7Cf71ba0c7072547cd26e5bdd5c129c4af85edf7e6%7C1700660412k9cu4"
      }
    });
    fs.writeFileSync("./settings.html", settingsHtml)

  } catch (error) {
    console.error(error);
  }
}

main();
