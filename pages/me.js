import Head from "next/head";
import Page from "../layouts/main";
import Post from "../components/Post";
import { me } from "../xyz";

const markdown = `Hi there, welcome! People call me **Odi**. You may also know me by my screen name, @**mathdroid**. My passion for making stuff is deeply entrenched since I was a kid, and so is my interest in computers. I majored in [Electrical Engineering][1], where I found my true calling, which is [automation][2]. I keep dreaming this version of the world where people no longer have to do dirty jobs anymore, where humanity is [served][3] [by][4] [machines][5], and nobody has to [struggle][6] just to keep themselves alive. I'm working my best to help achieve that cause, but everything must start small, so nowadays I try to make beautiful and performant programs. (Currently in love with [Javascript][7].)\n\nI still [Tweet][8] sometimes 😉, and if 140 characters aren't enough, I put them into my [Blog][9]. Sometimes I do interesting stuff with computers that I put on my [GitHub][10]. My friends and family can find me on [Facebook][11] or [Path][12], and even in [Instagram][13], although I rarely post there. I make chill playlists on [Spotify][14] and track them on [Last.fm][15].\n\nYou can reach me via the channels above. If you want to encrypt your messages, my PGP key is hosted on my [Keybase][16]. Cheers! 🍻\n\nP.S: for recruiters, here's my [résumé][17].\n\n[1]: https://itb.ac.id\n[2]: https://en.wikipedia.org/wiki/Automation\n[3]: https://en.wikipedia.org/wiki/Robotics\n[4]: https://en.wikipedia.org/wiki/Military_robot\n[5]: https://en.wikipedia.org/wiki/Domestic_robot\n[6]: https://en.wikipedia.org/wiki/Basic_income\n[7]: https://babeljs.io/\n[8]: https://twitter.com/mathdroid\n[9]: https://mustadi.xyz\n[10]: https://github.com/mathdroid\n[11]: https://www.facebook.com/mathdroid\n[12]: https://www.path.com/profile/3GZaRp\n[13]: https://instagram.com/idatsum\n[14]: https://play.spotify.com/user/12164039257\n[15]: http://last.fm/user/mathdroid\n[16]: https://keybase.io/mathdroid\n[17]: https://standardresume.co/MuhammadMustadi\n  `;

export default () => (
  <Page>
    <Head>
      <title>{me.title}</title>
    </Head>
    <div className={"xyz-blog"}>
      <Post title={me.title} when={me.published_at} markdown={markdown} />
    </div>
    <style jsx>{`
      :global(.xyz-blog) {
        max-width: 40em;
        margin: 0 auto;
        line-height: 2;
        padding: 1em;
      }
      :global(blockquote) {
        border-left-style: solid;
        border-left-width: 0.5em;
        border-left-color: #16161d;
        padding-left: 1em;
        margin-left: -1.5em;
        color: #999;
      }
      :global(.xyz-blog) :global(p) {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    `}</style>
  </Page>
);
