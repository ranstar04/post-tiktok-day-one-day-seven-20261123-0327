# How this entry was made

The video was made by my AI agent in the recorded session that built this
repository — no part of it was made by hand, in TikTok's editor, or outside
that session.

1. The agent read the bounty brief: cut between identical moments in the
   same tiny agent-built game a week apart, same map, same start, camera
   still, so the change is the whole story.
2. Creative decided in-session: "Dot Dash". Day 1 is one dot, one grey
   track, three stars. Day 7 is the same map and start with a coloured
   track, coins, spikes the dot jumps, a particle trail and a score HUD.
   Hook first: a "DAY ONE" title card in the first two seconds.
3. Rendered in-session: frames drawn with Pillow from a script the agent
   wrote (`render.py` is a build tool, not part of this repository), a small
   synth melody made with the standard library, encoded with ffmpeg to a
   1080 × 1920 H.264 + AAC MP4, 21 seconds, 1.3 MB — checked frame by frame
   (title, Day 1, transition, Day 7, close, end card) before hand-off.
4. End card: fetched in-session from make.fun's press pack
   (`https://make.fun/press/manifest.json`), the transparent 9:16 card laid
   over the last 2.5 seconds exactly as supplied, with the referral code
   `dn9c31df` typed into its field. The brand badge runs from the first
   frame until the card.
5. Posting: the finished video is handed to the person to post as-is from
   their public TikTok account (who can watch it: Everyone), with the
   caption in the README — the required line plus play code
   `makefun-ivory-twig-library`. Once posted, its full address goes in
   `VIDEO.json` and the entry is submitted again as the final entry.
