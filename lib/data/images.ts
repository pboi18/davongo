export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

const placeholder = (seed: string, width: number, height: number) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${width}&h=${height}&q=85`

export const images = {
  logoLight: {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davo-logo-for-light-bg-lReMO9sDiwCdlcdJsoLQfE5wXTD22H.png',
    alt: 'DAVO',
    width: 126,
    height: 46,
  },
  logoDark: {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davo-logo-for-dark-bg-UNgliPn27GSoQQG8kg9eOMFf98wYw8.png',
    alt: 'DAVO',
    width: 126,
    height: 46,
  },
  hero: {
    src: placeholder('photo-1532629345422-7515f3d16bb6', 1400, 900),
    alt: 'Community members working together outdoors',
    width: 1400,
    height: 900,
  },
  featuredStory: {
    src: placeholder('photo-1504159506876-f8338247a14a', 1200, 800),
    alt: 'A community member smiling outdoors',
    width: 1200,
    height: 800,
  },
  programImages: [
    { src: placeholder('photo-1497633762265-9d179a990aa6', 900, 600), alt: 'Students learning together', width: 900, height: 600 },
    { src: placeholder('photo-1556761175-b413da4baf72', 900, 600), alt: 'People collaborating around a table', width: 900, height: 600 },
    { src: placeholder('photo-1531206715517-5c0ba140b2b8', 900, 600), alt: 'Community members sharing a conversation', width: 900, height: 600 },
  ],
  teamImages: [
    { src: placeholder('photo-1494790108377-be9c29b29330', 600, 600), alt: 'DAVO team member portrait', width: 600, height: 600 },
    { src: placeholder('photo-1500648767791-00dcc994a43e', 600, 600), alt: 'DAVO team member portrait', width: 600, height: 600 },
  ],
  galleryItems: [
    { src: placeholder('photo-1529156069898-49953e39b3ac', 1200, 800), alt: 'Community gathering', width: 1200, height: 800 },
    { src: placeholder('photo-1517486808906-6ca8b3f04846', 1200, 800), alt: 'Community workshop', width: 1200, height: 800 },
  ],
  ogImage: {
    src: placeholder('photo-1532629345422-7515f3d16bb6', 1200, 630),
    alt: 'DAVO community impact',
    width: 1200,
    height: 630,
  },
} as const satisfies {
  logoLight: ImageAsset
  logoDark: ImageAsset
  hero: ImageAsset
  featuredStory: ImageAsset
  programImages: readonly ImageAsset[]
  teamImages: readonly ImageAsset[]
  galleryItems: readonly ImageAsset[]
  ogImage: ImageAsset
}
