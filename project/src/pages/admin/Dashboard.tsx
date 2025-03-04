import { Activity, GraduationCap, Users, BookOpen, TrendingUp } from 'lucide-react';
import Card from '../../components/common/Card';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Tableau de bord</h1>
        <p className="text-gray-600 mt-1">Bienvenue sur UniGrade</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Étudiants</p>
              <p className="text-lg font-semibold text-gray-800">1,234</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-blue-600">
            +12% ce mois
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Professeurs</p>
              <p className="text-lg font-semibold text-gray-800">89</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-600">
            +4% ce mois
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cours</p>
              <p className="text-lg font-semibold text-gray-800">156</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-purple-600">
            +8% ce mois
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Moyenne</p>
              <p className="text-lg font-semibold text-gray-800">3.8</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-orange-600">
            +2% ce semestre
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Activité récente</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                <div className="bg-blue-50 p-1.5 rounded-lg">
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Note mise à jour</p>
                  <p className="text-xs text-gray-500">John Doe a mis à jour CS101</p>
                </div>
                <span className="text-xs text-gray-500">2h</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance par département</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Informatique</span>
                <span className="text-sm font-medium text-gray-800">85%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Ingénierie</span>
                <span className="text-sm font-medium text-gray-800">92%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Commerce</span>
                <span className="text-sm font-medium text-gray-800">78%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className="h-1.5 bg-orange-500 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}