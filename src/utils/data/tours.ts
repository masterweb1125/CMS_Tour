import type {  Tours } from "@/src/types/client/tours.types"
import   {
  Avatar,
  AvatarFull,
  Bahamas,
  Italy,
  Japan,
  London,
  Newyork,
  Paris,
  Swiss,
  Tokyo
} from '@/src/utils/images/images'

export const tours:Tours[]=[
 
  {
    name: 'City of Light London',
    price: 999,
    category: "adventure",
    coverPic: London.src,
    description: 'Learn to experience London with confidence with an exclusive travel guide by London natives.',
    duration: { hours: 3, minutes: 12 },
    viewers: 34129,
    agent: { firstName: 'JennyParis', locationCity: "London", locationCountry: "UK", avatarUrl: Avatar.src, profilePic: AvatarFull.src },
    favorite: false,
  },
  
  {
    name: 'Capital of France, Paris',
    price: 900,
    category: "ecotoursim",
    coverPic: Paris.src,
    description: "Learn and Discover the beauty of the France Capital Paris. let's explore and experience of the France capital",
    duration: { hours: 3, minutes: 12 },
    viewers: 54129,
    agent: { firstName: 'JennyParis', locationCity: "Paris", locationCountry: "France", avatarUrl: Avatar.src, profilePic: AvatarFull.src },
    favorite: false,
  },

  {
    name: 'Serenity in Seoul',
    price: 849,
    category: "cultural",
    coverPic:Tokyo.src,
    description: 'Discover the beauty of Seoul with a comprehensive travel guide created by locals.',
    duration: { hours: 4, minutes: 30 },
    viewers: 25876,
    agent: { firstName: 'SeoulExplorer', locationCity: 'Seoul', locationCountry: 'South Korea',avatarUrl:Avatar.src,profilePic:AvatarFull.src },
    favorite:false,
  },
  {
    name: 'Mystical Marrakech',
    price: 99,
    category: "educational",
    coverPic:Bahamas.src,
    description: 'Immerse yourself in the enchanting atmosphere of Marrakech with a detailed travel guide.',
    duration: { hours: 5, minutes: 0 },
    viewers: 41245,
    agent: { firstName: 'MagicMarrakech', locationCity: 'Marrakech', locationCountry: 'Morocco',avatarUrl:Avatar.src,profilePic:AvatarFull.src },
    favorite:false,
  },
  {
    name: 'Rome Reverie',
    price: 399,
    coverPic: Swiss.src,
    description: 'Experience the timeless charm of Rome through an expertly crafted travel guide.',
    duration: { hours: 4, minutes: 45 },
    viewers: 35678,
    agent: { firstName: 'RomanRoamer', locationCity: 'Rome', locationCountry: 'Italy',avatarUrl:Avatar.src,profilePic:AvatarFull.src },
    favorite:false,
  },
  {
    name: 'Tokyo Tranquility',
    price: 1099,
    coverPic: Japan.src,
    description: 'Uncover the secrets of Tokyo with a travel guide that brings out the tranquility of the city.',
    duration: { hours: 6, minutes: 15 },
    viewers: 28753,
    agent: { firstName: 'TokyoTraveler', locationCity: 'Tokyo', locationCountry: 'Japan',avatarUrl:Avatar.src,profilePic:AvatarFull.src },
    favorite:false,
  },
  {
    name: 'Barcelona Bliss',
    price: 749,
    coverPic:Italy.src,
    description: 'Embark on a journey through the vibrant streets of Barcelona with an immersive travel guide.',
    duration: { hours: 3, minutes: 55 },
    viewers: 39821,
    agent: { firstName: 'BarcelonaBreeze', locationCity: 'Barcelona', locationCountry: 'Spain',avatarUrl:Avatar.src,profilePic:AvatarFull.src },
    favorite:false,
  }
]