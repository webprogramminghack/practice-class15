let a = 1;
const b = 1; // literal type

let c = 1 as const;
c = 2; // error
c = 1; // ok

const nums1 = ['1', '2', '3'];
const nums2 = ['1', '2', '3'] as const;

const a = nums2[1]; // a becomes a literal type '2'
nums[0] = '4'; // error

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;

type Person = {
  // skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => console.log(skillLevel));

const person = {
  name: 'John',
  age: 28,
  address: {
    street: '123 Main St',
  },
} as const;

person.name = 'Jane'; // error
person.address.street = 'asdasd'; // error
