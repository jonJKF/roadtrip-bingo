import { writable } from "svelte/store";

export const collectables = writable([]);

const fetchCollectables = async () => {
    const data = [
        {
          "_id": "617f1e0c7634dd002d2e2955",
          "index": 0,
          "guid": "ebab3f9b-feac-4f25-bafe-b7435ea86517",
          "completed": false,
          "description": "cupidatat officia nulla"
        },
        {
          "_id": "617f1e0c17ec42f8ce9d873a",
          "index": 1,
          "guid": "c1e0fc5c-48c1-4616-8916-ca70f1987b16",
          "completed": false,
          "description": "nisi dolor elit"
        },
        {
          "_id": "617f1e0c47d64fdc306f35b6",
          "index": 2,
          "guid": "61d346a0-1940-44df-84e0-fbf6e2b10ae6",
          "completed": false,
          "description": "aute pariatur aliquip"
        },
        {
          "_id": "617f1e0ca6552dc4d4bbf1fa",
          "index": 3,
          "guid": "468fec9e-7379-4585-9273-2d24fac63c12",
          "completed": false,
          "description": "incididunt pariatur sunt"
        },
        {
          "_id": "617f1e0c9d1ac2b6d38bd84d",
          "index": 4,
          "guid": "1d2554f6-036b-43ac-bf81-97a2a911a82c",
          "completed": false,
          "description": "sint consequat ullamco"
        },
        {
          "_id": "617f1e0ca03de54d45a9ac10",
          "index": 5,
          "guid": "3a2723b7-6d4c-4cce-8942-a5e0435dc490",
          "completed": false,
          "description": "nulla cillum ipsum"
        },
        {
          "_id": "617f1e0cf8e6ef75e9452f75",
          "index": 6,
          "guid": "28b1f8b5-0dc4-4aa9-a9ec-b0c72bbf01ff",
          "completed": false,
          "description": "reprehenderit cillum anim"
        },
        {
          "_id": "617f1e0c12fdd86ad5236022",
          "index": 7,
          "guid": "71bca770-614e-494f-a0c1-725da65f7c7c",
          "completed": false,
          "description": "sit id minim"
        },
        {
          "_id": "617f1e0cbf923c3003597b1f",
          "index": 8,
          "guid": "0b78fee6-c7fe-457e-81fe-e6857f7d6071",
          "completed": false,
          "description": "dolore sunt magna"
        },
        {
          "_id": "617f1e0ca67693eaf5d2a3c4",
          "index": 9,
          "guid": "87b03f65-c963-4f23-b0a5-148c22da0417",
          "completed": false,
          "description": "officia eu ut"
        },
        {
          "_id": "617f1e0c51afe7e0dbec279b",
          "index": 10,
          "guid": "68f267e6-50d7-4fa1-816f-7bf489b9e64a",
          "completed": false,
          "description": "laboris pariatur voluptate"
        },
        {
          "_id": "617f1e0cc6c0414d72d6355f",
          "index": 11,
          "guid": "409cc505-5fb6-4976-ae97-faaccd2030b6",
          "completed": false,
          "description": "duis fugiat adipisicing"
        },
        {
          "_id": "617f1e0ca6af314372387078",
          "index": 12,
          "guid": "2afcd255-4db7-4450-88a1-12d1efda5f15",
          "completed": false,
          "description": "ipsum do est"
        },
        {
          "_id": "617f1e0cef6e75d28aefb721",
          "index": 13,
          "guid": "9c6ff5cf-a522-4fd3-b5e7-64fd408e436c",
          "completed": false,
          "description": "incididunt irure culpa"
        },
        {
          "_id": "617f1e0cc6e9d0d0f8591a70",
          "index": 14,
          "guid": "be500eae-c18e-4c8d-b153-b98bb9d1dec0",
          "completed": false,
          "description": "aute eu reprehenderit"
        },
        {
          "_id": "617f1e0c97c457bafa952452",
          "index": 15,
          "guid": "98feb6ed-7023-4480-9b88-bf71812dffeb",
          "completed": false,
          "description": "ullamco nulla duis"
        },
        {
          "_id": "617f1e0c15b871bf9fe4eea4",
          "index": 16,
          "guid": "fcd45fe5-4138-417a-8927-03490939dbd5",
          "completed": false,
          "description": "magna dolore dolore"
        },
        {
          "_id": "617f1e0cc511f6965b32a6e4",
          "index": 17,
          "guid": "65b6c082-c394-43cd-9aaf-7b813ddc1ce7",
          "completed": false,
          "description": "aute nisi sunt"
        },
        {
          "_id": "617f1e0c5b2627c6406ade4d",
          "index": 18,
          "guid": "0def8495-f193-46ce-a53d-4f6d2beffc26",
          "completed": false,
          "description": "aliqua commodo fugiat"
        },
        {
          "_id": "617f1e0c2130321ae15c31dc",
          "index": 19,
          "guid": "af01d614-e43f-441b-95b1-8132f7914cff",
          "completed": false,
          "description": "sunt reprehenderit labore"
        },
        {
          "_id": "617f1e0cf4622fc12fec5555",
          "index": 20,
          "guid": "6fa16fc7-c68c-4853-be05-10098c6453e1",
          "completed": false,
          "description": "nisi elit eu"
        },
        {
          "_id": "617f1e0c72863424b5e05449",
          "index": 21,
          "guid": "fb6c02cd-672c-4b57-a7a0-c94a1a09681e",
          "completed": false,
          "description": "sit sit cupidatat"
        },
        {
          "_id": "617f1e0c084e6c6b18648769",
          "index": 22,
          "guid": "1abfc1de-436d-4dac-b3ac-7864cf081c2a",
          "completed": false,
          "description": "ipsum voluptate duis"
        },
        {
          "_id": "617f1e0c495085a91920e1f3",
          "index": 23,
          "guid": "367044be-5e93-414f-8891-74ec139cd175",
          "completed": false,
          "description": "cupidatat id reprehenderit"
        },
        {
          "_id": "617f1e0ce73c6d9ed6925f32",
          "index": 24,
          "guid": "aff8a580-a336-4464-8cee-9643f12a5b5c",
          "completed": false,
          "description": "ea ea irure"
        }
      ];

      collectables.set(data);
}

setTimeout(fetchCollectables, 200);
//fetchCollectables();