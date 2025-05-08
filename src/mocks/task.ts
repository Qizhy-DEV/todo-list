import { TaskInterface } from '../interfaces/task';

export const sampleTasks: TaskInterface[] = [
    {
        id: new Date('2025-05-01T09:00:00Z').toISOString(),
        title: 'Team Meeting',
        subtitle: 'Weekly Sync with Product Team',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-02T10:00:00Z').toISOString(),
        title: 'Client Review',
        subtitle: 'Crypto Wallet Redesign',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-03T14:30:00Z').toISOString(),
        title: 'Design Wireframe',
        subtitle: 'Landing Page Redesign',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-04T08:15:00Z').toISOString(),
        title: 'Code Review',
        subtitle: 'Feature: User Authentication',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-05T11:45:00Z').toISOString(),
        title: 'Planning Session',
        subtitle: 'Sprint Planning - Week 19',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-06T13:00:00Z').toISOString(),
        title: 'UX Audit',
        subtitle: 'Review mobile app usability',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-07T15:30:00Z').toISOString(),
        title: 'Bug Triage',
        subtitle: 'Prioritize reported issues',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-08T09:30:00Z').toISOString(),
        title: 'Roadmap Review',
        subtitle: 'Q3 Product Goals Discussion',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-09T10:00:00Z').toISOString(),
        title: 'Prototype Testing',
        subtitle: 'Test new onboarding flow',
        isCompleted: false,
    },
    {
        id: new Date('2025-05-10T16:00:00Z').toISOString(),
        title: 'Retrospective',
        subtitle: 'Look back on Sprint 18',
        isCompleted: false,
    },
];
