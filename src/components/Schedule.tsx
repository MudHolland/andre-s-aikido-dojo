import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LessonTime {
  time: string;
  discipline: string;
}

interface DaySchedule {
  day: string;
  lessons: LessonTime[];
}

const schedule: DaySchedule[] = [
  {
    day: "Maandag",
    lessons: [
      { time: "15:00 - 16:00", discipline: "Tuimeljudo" },
      { time: "19:00 - 20:30", discipline: "Aikido" },
    ],
  },
  {
    day: "Dinsdag",
    lessons: [
      { time: "19:00 - 20:00", discipline: "Jo-do" },
      { time: "20:00 - 21:30", discipline: "Iaido" },
    ],
  },
  {
    day: "Woensdag",
    lessons: [
      { time: "19:00 - 20:30", discipline: "Aikido" },
    ],
  },
  {
    day: "Vrijdag",
    lessons: [
      { time: "09:00 - 10:30", discipline: "Aikido" },
      { time: "16:00 - 17:30", discipline: "Judo" },
      { time: "19:00 - 20:30", discipline: "Iaido" },
    ],
  },
  {
    day: "Zaterdag",
    lessons: [
      { time: "08:15 - 09:15", discipline: "Tuimeljudo" },
      { time: "09:30 - 11:00", discipline: "Jo-do" },
      { time: "11:15 - 12:45", discipline: "Aikido" },
    ],
  },
];

const Schedule = () => {
  return (
    <section id="rooster" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Lesrooster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan je training in met ons wekelijkse lesrooster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schedule.map((daySchedule) => (
            <Card 
              key={daySchedule.day} 
              className="gradient-card border-border hover:border-primary transition-smooth shadow-soft hover:shadow-medium"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-primary">{daySchedule.day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {daySchedule.lessons.map((lesson, index) => (
                  <div 
                    key={index} 
                    className="pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="font-semibold text-foreground mb-1">
                      {lesson.time}
                    </div>
                    <div className="text-muted-foreground">
                      {lesson.discipline}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
